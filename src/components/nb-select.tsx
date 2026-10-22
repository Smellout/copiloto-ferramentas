"use client";

import { useEffect, useRef, useState } from "react";

export type NbOption = { value: string; label: string };

/**
 * Select no estilo da página. O dropdown nativo é desenhado pelo sistema
 * operacional e quebra a linguagem visual — aqui a lista é nossa, com a mesma
 * borda de 2px e a mesma sombra dura do resto do site.
 *
 * Acessibilidade: padrão combobox com `aria-activedescendant`. O foco nunca sai
 * do botão; as setas movem a opção ativa dentro da lista.
 */
export function NbSelect({
  id,
  value,
  options,
  onChange,
  disabled = false,
  placeholder,
  invalid = false,
  describedBy,
}: {
  id: string;
  value: string;
  options: NbOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  /** Campo obrigatório ainda por escolher, depois de uma tentativa de envio. */
  invalid?: boolean;
  /** Id do texto que explica o campo (dica ou erro), lido junto com o rótulo. */
  describedBy?: string;
  /**
   * O que aparece enquanto nada foi escolhido.
   *
   * Sem isto, `value` vazio desenhava um botão em branco — que parece campo
   * quebrado, não campo por preencher.
   */
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const selectedIndex = options.findIndex((o) => o.value === value);
  const vazio = selectedIndex < 0;
  const label = vazio ? (placeholder ?? "") : options[selectedIndex].label;

  useEffect(() => {
    if (!open) return;
    const onDocDown = (ev: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(ev.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, [open]);

  // Rola só a lista até a opção ativa: scrollIntoView levaria a página junto.
  useEffect(() => {
    if (!open || active < 0 || !listRef.current) return;
    const list = listRef.current;
    const item = list.children[active] as HTMLElement | undefined;
    if (!item) return;
    const top = item.offsetTop;
    const bottom = top + item.offsetHeight;
    if (top < list.scrollTop) list.scrollTop = top - 6;
    else if (bottom > list.scrollTop + list.clientHeight) {
      list.scrollTop = bottom - list.clientHeight + 6;
    }
  }, [open, active]);

  function openList() {
    if (disabled) return;
    setActive(selectedIndex);
    setOpen(true);
  }

  function choose(i: number) {
    const opt = options[i];
    if (!opt) return;
    onChange(opt.value);
    setOpen(false);
    btnRef.current?.focus();
  }

  function onKeyDown(ev: React.KeyboardEvent) {
    const n = options.length;
    if (!open) {
      if (ev.key === "ArrowDown" || ev.key === "ArrowUp" || ev.key === "Enter" || ev.key === " ") {
        ev.preventDefault();
        openList();
      }
      return;
    }
    if (ev.key === "Escape") {
      ev.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
    } else if (ev.key === "ArrowDown") {
      ev.preventDefault();
      setActive((i) => Math.min(n - 1, i + 1));
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      setActive((i) => Math.max(0, i - 1));
    } else if (ev.key === "Home") {
      ev.preventDefault();
      setActive(0);
    } else if (ev.key === "End") {
      ev.preventDefault();
      setActive(n - 1);
    } else if (ev.key === "Enter" || ev.key === " ") {
      ev.preventDefault();
      choose(active);
    }
  }

  return (
    <div className={"nb-select" + (open ? " open" : "")} ref={wrapRef} onKeyDown={onKeyDown}>
      <button
        id={id}
        ref={btnRef}
        type="button"
        className="nb-select-btn"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={invalid || undefined}
        aria-describedby={describedBy}
        aria-activedescendant={open && active >= 0 ? `${id}-opt-${active}` : undefined}
        onClick={() => (open ? setOpen(false) : openList())}
      >
        <span className={"nb-select-label" + (vazio ? " vazio" : "")}>{label}</span>
        <svg className="nb-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open ? (
        <div className="nb-select-list" role="listbox" ref={listRef}>
          {options.map((o, i) => (
            <div
              key={o.value}
              id={`${id}-opt-${i}`}
              role="option"
              aria-selected={i === selectedIndex}
              className={"nb-select-opt" + (i === active ? " active" : "")}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(i)}
            >
              {o.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
