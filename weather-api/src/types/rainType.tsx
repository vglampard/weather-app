export declare module namespace {

    export interface OnClick {
        enable: boolean;
        mode: string;
    }

    export interface OnDiv {
        elementId: string;
        enable: boolean;
        mode: string;
    }

    export interface Parallax {
        enable: boolean;
        force: number;
        smooth: number;
    }

    export interface OnHover {
        enable: boolean;
        mode: string;
        parallax: Parallax;
    }

    export interface Events {
        onClick: OnClick;
        onDiv: OnDiv;
        onHover: OnHover;
        resize: boolean;
    }

    export interface Bubble {
        distance: number;
        duration: number;
        opacity: number;
        size: number;
        speed: number;
    }

    export interface LineLinked {
        opacity: number;
    }

    export interface Connect {
        distance: number;
        lineLinked: LineLinked;
        radius: number;
    }

    export interface LineLinked2 {
        opacity: number;
    }

    export interface Grab {
        distance: number;
        lineLinked: LineLinked2;
    }

    export interface Push {
        quantity: number;
    }

    export interface Remove {
        quantity: number;
    }

    export interface Repulse {
        distance: number;
        duration: number;
    }

    export interface Modes {
        bubble: Bubble;
        connect: Connect;
        grab: Grab;
        push: Push;
        remove: Remove;
        repulse: Repulse;
    }

    export interface Interactivity {
        detectsOn: string;
        events: Events;
        modes: Modes;
    }

    export interface Color {
        value: string;
    }

    export interface LineLinked3 {
        blink: boolean;
        color: string;
        consent: boolean;
        distance: number;
        enable: boolean;
        opacity: number;
        width: number;
    }

    export interface Animation {
        enable: boolean;
        speed: number;
        sync: boolean;
    }

    export interface Rotate {
        value: number;
        random: boolean;
        direction: string;
        animation: Animation;
    }

    export interface Attract {
        enable: boolean;
        rotateX: number;
        rotateY: number;
    }

    export interface Move {
        attract: Attract;
        bounce: boolean;
        direction: string;
        enable: boolean;
        outMode: string;
        random: boolean;
        speed: number;
        straight: boolean;
    }

    export interface Density {
        enable: boolean;
        area: number;
    }

    export interface Number {
        density: Density;
        limit: number;
        value: number;
    }

    export interface Animation2 {
        enable: boolean;
        minimumValue: number;
        speed: number;
        sync: boolean;
    }

    export interface Opacity {
        animation: Animation2;
        random: boolean;
        value: number;
    }

    export interface Character {
        fill: boolean;
        font: string;
        style: string;
        value: string;
        weight: string;
    }

    export interface Polygon {
        nb_sides: number;
    }

    export interface Stroke {
        color: string;
        width: number;
    }

    export interface Shape {
        character: Character;
        image: any[];
        polygon: Polygon;
        stroke: Stroke;
        type: string;
    }

    export interface Animation3 {
        enable: boolean;
        minimumValue: number;
        speed: number;
        sync: boolean;
    }

    export interface Size {
        animation: Animation3;
        random: boolean;
        value: number;
    }

    export interface Particles {
        color: Color;
        lineLinked: LineLinked3;
        rotate: Rotate;
        move: Move;
        number: Number;
        opacity: Opacity;
        shape: Shape;
        size: Size;
    }

    export interface Draw {
        enable: boolean;
        lineColor: string;
        lineWidth: number;
    }

    export interface Move2 {
        radius: number;
    }

    export interface Polygon2 {
        draw: Draw;
        move: Move2;
        scale: number;
        type: string;
        url: string;
    }

    export interface RootObject {
        detectRetina: boolean;
        fpsLimit: number;
        interactivity: Interactivity;
        particles: Particles;
        polygon: Polygon2;
    }

}


