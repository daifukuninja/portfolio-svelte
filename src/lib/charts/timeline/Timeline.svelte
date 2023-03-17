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

    const message_jp =
        `中学生の誕生日に父がPC9801とまちがえて買ってきた「MSX 2+」。少ない小遣いでコンピュータ雑誌を購入し、搭載されていた「MSX BASIC」をポチポチと触り始めるところからプログラマ人生をスタートさせる。
        
        その後の学生時代はマンガ、アニメ、ゲームに明け暮れ、プログラミングからは10数年離れていたものの、30歳を目前にして携わった仕事で「Excel VBA」に触れ、プログラミングの楽しさに覚醒。`.replace(
            /\n/g,
            "<br />"
        );
</script>

<div id="timeline-container">
    <div id="timeline">
        <VisXYContainer {data} height={540} style="text-align: center;">
            <h3>MIHARA's Skills Timeline</h3>
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
    </div>
    <p id="timeline-message">{@html message_jp}</p>
</div>

<style>
    #timeline-container {
        background-color: #110011;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.9;
    }
    #timeline {
        width: 95vw;
        padding-bottom: 2em;
    }
    #timeline-message {
        width: 95vw;
    }
    #timeline-message {
        background-color: #110011;
        display: block;
        opacity: 0.9;
    }
    @media (min-width: 768px) {
        #timeline {
            width: 80vw;
        }
        #timeline-message {
            width: 80vw;
        }
    }
</style>
