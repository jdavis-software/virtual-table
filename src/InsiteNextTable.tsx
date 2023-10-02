import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import React, { forwardRef } from "react";
import {
  TableVirtuoso,
  // TableVirtuosoProps,
  TableComponents,
  FixedHeaderContent,
  ItemContent
} from "react-virtuoso";

// interface TableColumns<D> {
//   dataKey: keyof D;
//   label: string;
//   numeric?: boolean;
//   width: number;
// }

// interface TableRows<D, L> {
//   dataKey: keyof D;
//   data: L[];
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// interface InsiteNextTableProps<D = any, C = any>
//   extends TableVirtuosoProps<D, C> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface InsiteNextTableProps<D = any, C = any> {
  rows?: readonly D[];
  components?: TableComponents<D, C>;
  fixedHeaderContent?: FixedHeaderContent;
  itemContent?: ItemContent<D, C>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InsiteNextTable: React.FC<InsiteNextTableProps> = ({
  rows,
  components,
  fixedHeaderContent,
  itemContent
}) => {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={components}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={itemContent}
      />
    </Paper>
  );
};

export default InsiteNextTable;
