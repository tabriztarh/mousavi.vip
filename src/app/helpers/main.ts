export const toEnglishDigits = (input: string): string => {
  return (
    input
      // Persian digits
      .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0))
      // Arabic‑Indic digits
      .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660))
  )
}
