export function useDebounce<T>(value: MaybeRefOrGetter<T>, delay = 300) {
  const debouncedValue = ref(toValue(value)) as Ref<T>
  let timer: ReturnType<typeof setTimeout> | null = null

  watch(
    () => toValue(value),
    (newVal) => {
      if (timer)
        clearTimeout(timer)
      timer = setTimeout(() => {
        debouncedValue.value = newVal
        timer = null
      }, delay)
    },
  )

  const scope = getCurrentScope()
  if (scope) {
    onScopeDispose(() => {
      if (timer)
        clearTimeout(timer)
    })
  }

  return readonly(debouncedValue)
}
