import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function parseCsv(text: string): string[][] {
  // Simple CSV parser for demo (handles quoted fields and commas)
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === '"') {
      if (inQuotes && text[i + 1] === '"') { field += '"'; i++; }
      else { inQuotes = !inQuotes; }
    } else if (c === "," && !inQuotes) {
      row.push(field); field = "";
    } else if ((c === "\n" || c === "\r") && !inQuotes) {
      if (field.length || row.length) { row.push(field); rows.push(row); row = []; field = ""; }
    } else {
      field += c;
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row); }
  return rows.filter(r => r.length && r.some(cell => cell.trim() !== ""));
}

export function MigrationImport() {
  const [open, setOpen] = useState(false);
  const [headers, setHeaders] = useState<string[]>([]);
  const [rows, setRows] = useState<string[][]>([]);

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const data = parseCsv(text);
    setHeaders(data[0] || []);
    setRows(data.slice(1).slice(0, 10));
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Switch from Gusto? Import CSV</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Import preview</DialogTitle>
          <DialogDescription>Upload a CSV of customers/employees to preview mapping for migration.</DialogDescription>
        </DialogHeader>
        <input type="file" accept=".csv,text/csv" onChange={onFile} />
        {headers.length > 0 && (
          <div className="mt-4 overflow-auto rounded border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  {headers.map((h, i) => (<th key={i} className="p-2 text-left font-semibold">{h}</th>))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t">
                    {headers.map((_, j) => (
                      <td key={j} className="p-2">{r[j] ?? ""}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-2 text-xs text-muted-foreground">Showing first {rows.length} rows.</div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
