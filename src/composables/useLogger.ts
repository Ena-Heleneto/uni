import type { ConsolaInstance } from 'consola'
import { createConsola } from 'consola'

interface UseLoggerOptions {
  tag?: string
  level?: number
  silent?: boolean
}

export function useLogger(options: UseLoggerOptions = {}) {
type LoggerMethod = 'log' | 'info' | 'success' | 'warn' | 'error' | 'debug' | 'trace' | 'start' | 'box'

const {
  tag,
  level = import.meta.env.DEV ? 4 : 3,
  silent = false,
} = options

const instance = createConsola({ level })

function resolveLogger(runtimeTag?: string): ConsolaInstance {
  const nextTag = runtimeTag ?? tag
  return nextTag ? instance.withTag(nextTag) : instance
}

function run(method: LoggerMethod, args: unknown[], runtimeTag?: string) {
  if (silent)
    return
  const logger = resolveLogger(runtimeTag)
    ;(logger[method] as (...methodArgs: unknown[]) => unknown)(...args)
}

function withTag(runtimeTag: string) {
  return useLogger({ ...options, tag: runtimeTag })
}

return {
  instance,
  withTag,
  log: (...args: Parameters<ConsolaInstance['log']>) => run('log', args),
  info: (...args: Parameters<ConsolaInstance['info']>) => run('info', args),
  success: (...args: Parameters<ConsolaInstance['success']>) => run('success', args),
  warn: (...args: Parameters<ConsolaInstance['warn']>) => run('warn', args),
  error: (...args: Parameters<ConsolaInstance['error']>) => run('error', args),
  debug: (...args: Parameters<ConsolaInstance['debug']>) => run('debug', args),
  trace: (...args: Parameters<ConsolaInstance['trace']>) => run('trace', args),
  start: (...args: Parameters<ConsolaInstance['start']>) => run('start', args),
  box: (...args: Parameters<ConsolaInstance['box']>) => run('box', args),
  withRuntimeTag: (runtimeTag: string) => ({
    log: (...args: Parameters<ConsolaInstance['log']>) => run('log', args, runtimeTag),
    info: (...args: Parameters<ConsolaInstance['info']>) => run('info', args, runtimeTag),
    success: (...args: Parameters<ConsolaInstance['success']>) => run('success', args, runtimeTag),
    warn: (...args: Parameters<ConsolaInstance['warn']>) => run('warn', args, runtimeTag),
    error: (...args: Parameters<ConsolaInstance['error']>) => run('error', args, runtimeTag),
    debug: (...args: Parameters<ConsolaInstance['debug']>) => run('debug', args, runtimeTag),
    trace: (...args: Parameters<ConsolaInstance['trace']>) => run('trace', args, runtimeTag),
    start: (...args: Parameters<ConsolaInstance['start']>) => run('start', args, runtimeTag),
    box: (...args: Parameters<ConsolaInstance['box']>) => run('box', args, runtimeTag),
  }),
}
}
