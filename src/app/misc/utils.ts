import { ROUTER_PATHS } from './types'

export function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function pathToIndex(value: string): number {
    return Object.values(ROUTER_PATHS).indexOf(value as ROUTER_PATHS)
}
