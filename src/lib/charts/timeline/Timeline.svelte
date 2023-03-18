<script lang="ts">
    import {
        VisXYContainer,
        VisBulletLegend,
        VisTimeline,
        VisAxis,
    } from "@unovis/svelte";
    import { colorMap, data, ProductType } from "./data";
    import type { DataRecord } from "./data";

    const labelWidth = 120;
    const yearOnlyFormatter = (date?: number | Date) => {
        if (date instanceof Date) {
            return date.getFullYear().toString();
        }
        return new Date(date).getFullYear().toString();
    }

    const x = (d: DataRecord) => d.startDate;
    const length = (d: DataRecord) => d.endDate - d.startDate;
    const type = (d: DataRecord) => d.name;
    const color = (d: DataRecord) => colorMap[d.type];

    const legendItems = Object.keys(ProductType).map((name, i) => ({
        name,
        color: colorMap[name],
    }));

</script>

<VisXYContainer {data} height={540} style="text-align: center;">
    <VisBulletLegend items={legendItems} />
    <VisTimeline
        {x}
        {length}
        {type}
        {color}
        {labelWidth}
        showLabels={true}
        lineCap={true}
        showEmptySegments={true}
    />
    <VisAxis type="x" tickFormat={yearOnlyFormatter} numTicks={6} gridLine={true} />
</VisXYContainer>    
