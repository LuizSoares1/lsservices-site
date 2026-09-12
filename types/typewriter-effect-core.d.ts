declare module "typewriter-effect/dist/core" {
    interface TypewriterOptions {
        delay?: number
        cursor?: string
    }

    export default class Typewriter {
        constructor(
            element: HTMLElement,
            options?: TypewriterOptions
        )
        typeString(text: string): this
        pauseFor(ms: number): this
        deleteAll(speed?: number): this
        callFunction(fn: () => void): this
        start(): this
    }
}
