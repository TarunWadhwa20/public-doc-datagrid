import styles from "../styles/DataGrid.module.css";
type DataItem = {
    name: string;
    device: string;
    path: string;
    status: "available" | "scheduled";
  };
  
  type Props = {
    item: DataItem;
    selected: string[];
    toggleSelect: (name: string) => void;
  };
  
  const DataGridRow: React.FC<Props> = ({ item, selected, toggleSelect }) => {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={selected.includes(item.name)}
            onChange={() => toggleSelect(item.name)}
          />
        </td>
        <td>{item.name}</td>
        <td>{item.device}</td>
        <td title={item.path} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "200px" }}>
          {item.path}
        </td>
        <td style={{ textTransform: "capitalize" }}>
          {item.status === "available" && <span className={styles.statusDot}></span>}
          {item.status}
        </td>
      </tr>
    );
  };
  
  export default DataGridRow;
  