import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { DataTable } from "@/shared/components/data-table";
import { Filter, X, Loader2 } from "lucide-react";
import { useState, useCallback } from "react";
import { actividadesColumns } from "./_components/actividades-columns";
import { ActividadDetalleModal } from "./_components/actividad-detalle-modal";
import { useSidebar } from "@/shared/components/ui/sidebar";
import { useGetActivityLogs } from "./hooks/useGetActivityLogs";
import type {
  ActivityLog,
  GetActivityLogsParams,
} from "./types/activity-logs.type";

export default function ActivityLogsPage() {
  const [filtros, setFiltros] = useState<GetActivityLogsParams>({
    page: 1,
    limit: 10,
  });

  // Estado para el modal
  const [selectedAuditoria, setSelectedAuditoria] = useState<ActivityLog | null>(
    null
  );
  const [auditoriaModalOpen, setAuditoriaModalOpen] = useState(false);

  // Usar hook de auditoría
  const {
    data: auditoriaResponse,
    isLoading,
    error,
  } = useGetActivityLogs(filtros);

  // Obtener datos de la respuesta
  const auditoriaData = auditoriaResponse?.data || [];
  const pagination = auditoriaResponse?.pagination;

  // Función para manejar el click en una fila
  const handleRowClick = (auditoria: ActivityLog) => {
    setSelectedAuditoria(auditoria);
    setAuditoriaModalOpen(true);
  };

  // Función para limpiar filtros
  const clearFilters = () => {
    setFiltros({
      page: 1,
      limit: 10,
    });
  };

  // Función para manejar cambios de paginación desde el DataTable
  const handlePaginationChange = useCallback(
    (pageIndex: number, pageSize: number) => {
      setFiltros((prev) => ({
        ...prev,
        page: pageIndex + 1, // DataTable usa índice basado en 0, API usa basado en 1
        limit: pageSize,
      }));
    },
    []
  );



  // Verificar si hay filtros activos (excluyendo page y limit)
  const hasActiveFilters = Object.entries(filtros).some(
    ([key, value]) =>
      key !== "page" && key !== "limit" && value !== undefined && value !== ""
  );
  const activeFiltersCount = Object.entries(filtros).filter(
    ([key, value]) =>
      key !== "page" && key !== "limit" && value !== undefined && value !== ""
  ).length;

  const { state } = useSidebar();

  // Calcular el ancho disponible considerando el sidebar
  const sidebarWidth = state === "expanded" ? "18rem" : "6rem"; // 256px : 48px
  const availableWidth = `calc(100vw - ${sidebarWidth})`;

  if (error) {
    return (
      <main
        className="flex gap-4 overflow-y-hidden"
        style={{
          width: availableWidth,
          overflowX: "auto",
        }}
      >
        <div className="flex flex-col gap-4 p-4 pt-0">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-between items-center mt-6">
              <h1 className="text-3xl font-bold tracking-tight">
                Registro de auditoría
              </h1>
            </div>
            <p className="text-muted-foreground">
              Error al cargar los datos de auditoría
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <p className="text-red-600">Error: {error.message}</p>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main
      className="flex gap-4 overflow-y-hidden w-full"
      style={{
        width: availableWidth,
        overflowX: "auto",
      }}
    >
      <div className="flex flex-col gap-4 p-4 pt-0 w-full min-w-0">
        <div className="flex flex-col gap-1">
          <div className="flex flex-row justify-between items-center mt-6">
            <h1 className="text-3xl font-bold tracking-tight">
              Registro de auditoría
            </h1>
          </div>
          <p className="text-muted-foreground">
            Sistema de logs y seguimiento de actividades del sistema
          </p>
        </div>

        {/* Card de filtros mejorado */}
        <Card className="w-full">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros Avanzados
                {hasActiveFilters && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount} activo
                    {activeFiltersCount > 1 ? "s" : ""}
                  </Badge>
                )}
              </CardTitle>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4 mr-1" />
                  Limpiar filtros
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {/* Aquí se pueden agregar filtros específicos si la API los soporta */}
              {/* Por ahora solo dejamos el placeholder para futuros filtros */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-muted-foreground">
                  Año
                </label>
                <Select
                  value={
                    filtros.fecha_desde
                      ? new Date(filtros.fecha_desde).getFullYear().toString()
                      : "todos"
                  }
                  onValueChange={(value) => {
                    const newFiltros = { ...filtros, page: 1 };
                    if (value && value !== "todos") {
                      newFiltros.fecha_desde = `${value}-01-01T00:00:00.000Z`;
                      newFiltros.fecha_hasta = `${value}-12-31T23:59:59.999Z`;
                    } else {
                      delete newFiltros.fecha_desde;
                      delete newFiltros.fecha_hasta;
                    }
                    setFiltros(newFiltros);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar año" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos los años</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabla de auditoría usando el nuevo DataTable */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <span>Registro de auditoría</span>
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              </div>
              <Badge variant="outline" className="w-fit sm:ml-auto">
                {pagination?.total || auditoriaData.length} registro
                {(pagination?.total || auditoriaData.length) !== 1 ? "s" : ""}
                {auditoriaData.length > 0 &&
                  ` (${auditoriaData.length} mostrados)`}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full">
            {isLoading ? (
              <div className="flex items-center justify-center py-8 w-full">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="ml-2">Cargando registros de auditoría...</span>
              </div>
            ) : auditoriaData.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 w-full">
                <p className="text-muted-foreground">
                  No se encontraron registros de auditoría
                </p>
              </div>
            ) : (
              <DataTable
                columns={actividadesColumns}
                data={auditoriaData}
                searchPlaceholder="Buscar..."
                pageSize={filtros.limit || 10}
                onRowClick={handleRowClick}
                enableColumnVisibility={true}
                enableSearch={false} // Deshabilitado por ahora si no hay endpoint de búsqueda global
                enableRowSelection={false}
                maxHeight="calc(100vh - 400px)"
                className="mt-0"
                manualPagination={true}
                pageCount={
                  pagination
                    ? Math.ceil(pagination.total / pagination.limit)
                    : 0
                }
                pageIndex={(filtros.page || 1) - 1}
                onPaginationChange={handlePaginationChange}
              />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Modal para ver detalles de la auditoría */}
      <ActividadDetalleModal
        actividad={selectedAuditoria}
        open={auditoriaModalOpen}
        onOpenChange={setAuditoriaModalOpen}
      />
    </main>
  );
}