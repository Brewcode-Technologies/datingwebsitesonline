export const apiVersion = '2024-11-09'

export const dataset = 'production'

export const projectId = 'disabled'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
