'use client';
import { useState } from "react";
import DataGridHeader from "./DataGridHeader";
import DataGridRow from "./DataGridRow";
import styles from "../styles/DataGrid.module.css";

type DataItem = {
  name: string;
  device: string;
  path: string;
  status: "available" | "scheduled";
};

const data: DataItem[] = [
  { name: "smss.exe", device: "Stark", path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe", status: "scheduled" },
  { name: "netsh.exe", device: "Targaryen", path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe", status: "available" },
  { name: "uxtheme.dll", device: "Lanniester", path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll", status: "available" },
  { name: "cryptbase.dll", device: "Martell", path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll", status: "scheduled" },
  { name: "7za.exe", device: "Baratheon", path: "\\Device\\HarddiskVolume1\\temp\\7za.exe", status: "scheduled" }
];

export default function DataGrid() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const isIndeterminate = selected.length > 0 && selected.length < data.length;
  const toggleSelectAll = () => {
    setSelected(selected.length === data.length ? [] : data.map((item) => item.name));
  };

  const hasAvailableSelected = selected.some((name) => data.find((item) => item.name === name)?.status === "available");
  const hasScheduledSelected = selected.some((name) => data.find((item) => item.name === name)?.status === "scheduled");
  
  const handleDownload = () => {
    const selectedItems = data.filter(item => selected.includes(item.name));
    const message = selectedItems.map(item => `Name: ${item.name}\nDevice: ${item.device}\nPath: ${item.path}`).join("\n\n");
    alert(`Downloaded items:\n\n${message}`);
  };

  return (
    <div className={styles.datagridContainer}>
      <div className={styles.selectedActions}>
        <input 
          type="checkbox" 
          checked={selected.length === data.length} 
          onChange={toggleSelectAll} 
          ref={(el: HTMLInputElement | null) => {
            if (el) el.indeterminate = isIndeterminate;
          }}
        />
        <span className={styles.selectedCount}>{selected.length === 0 ? "None" : selected.length} Selected</span>
        <button 
          className={`${styles.downloadButton} ${hasAvailableSelected && !hasScheduledSelected ? styles.enabled : ""}`} 
          disabled={!hasAvailableSelected || hasScheduledSelected} 
          onClick={handleDownload}
        >
          Download Selected
        </button>
      </div>
      <table className={styles.datagrid}>
        <DataGridHeader />
        <tbody>
          {data.map((item) => (
            <DataGridRow key={item.name} item={item} selected={selected} toggleSelect={toggleSelect} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
