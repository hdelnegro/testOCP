// import type { ColumnDef } from "@tanstack/react-table";
// import { ArrowUpDown } from "lucide-react";
// import { formatFileSize } from "@/shared/lib/file-utils";
// import type { FileItem } from "@/shared/types/file.type";
// import { Checkbox } from "@/shared/components/ui/checkbox";
// import { Button } from "@/shared/components/ui/button";
// import { EyeIcon, Trash2Icon, Share2Icon } from "lucide-react";

// export function getFileColumns(
//   selected: string[],
//   setSelected: (ids: string[]) => void,
//   actions: {
//     onClick: (file: FileItem) => void;
//     onDeleteFile: (id: string) => void;
//     onStarFile: (id: string) => void;
//     onShareFile: (id: string) => void;
//   }
// ): ColumnDef<FileItem>[] {
//   return [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={table.getIsAllPageRowsSelected()}
//           onCheckedChange={(value) => {
//             table.toggleAllPageRowsSelected(!!value);
//             const visibleRowIds = table
//               .getRowModel()
//               .rows.map((r) => r.original.id);
//             setSelected(value ? visibleRowIds : []);
//           }}
//           aria-label="Seleccionar todo"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => {
//             row.toggleSelected(!!value);
//             const id = row.original.id;
//             setSelected(
//               value ? [...selected, id] : selected.filter((i) => i !== id)
//             );
//           }}
//           aria-label="Seleccionar fila"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false, // Esta columna no se puede ocultar
//     },
//     {
//       id: "name",
//       accessorKey: "name",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Nombre
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         );
//       },
//       cell: ({ row }) => <div className="font-medium">{row.original.name}</div>,
//       enableHiding: true, // Se puede ocultar
//     },
//     {
//       id: "type",
//       accessorKey: "type",
//       header: "Tipo",
//       cell: ({ row }) => (
//         <div className="text-muted-foreground">{row.original.type}</div>
//       ),
//       enableHiding: true, // Se puede ocultar
//     },
//     {
//       id: "size",
//       accessorKey: "size",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//             className="w-full justify-center"
//           >
//             Tamaño
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         );
//       },
//       cell: ({ row }) => (
//         <div className="text-muted-foreground text-center">
//           {row.original.size ? formatFileSize(row.original.size) : "-"}
//         </div>
//       ),
//       enableHiding: true, // Se puede ocultar
//     },
//     {
//       id: "modified",
//       accessorKey: "modified",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//             className="w-full justify-center"
//           >
//             Modificado
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         );
//       },
//       cell: ({ row }) => (
//         <div className="text-muted-foreground text-center">
//           {new Date(row.original.modified).toLocaleDateString()}
//         </div>
//       ),
//       enableHiding: true, // Se puede ocultar
//     },
//     {
//       id: "actions",
//       header: () => <div className="text-center">Acciones</div>,
//       cell: ({ row }) => {
//         const file = row.original;
//         return (
//           <div className="flex gap-2 items-center justify-center">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={(e) => {
//                 e.stopPropagation(); // Evitar que se active onRowClick
//                 actions.onClick(file);
//               }}
//             >
//               <EyeIcon className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 actions.onShareFile(file.id);
//               }}
//             >
//               <Share2Icon className="h-4 w-4" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 actions.onDeleteFile(file.id);
//               }}
//             >
//               <Trash2Icon className="h-4 w-4" />
//             </Button>
//           </div>
//         );
//       },
//       enableSorting: false,
//       enableHiding: false, // Las acciones no se pueden ocultar
//     },
//   ];
// }
