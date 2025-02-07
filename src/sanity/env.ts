export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skQxa2WjawgD3zZFr8gMHoq47PI0JhGTZfvCXeGV6u81S11UiM4NJdpcq17lmJVYEhgqpP1dnpZJv8giNe7fJT0r280fXC3N1trl1IMqFDHoDyicpbdwHhMVoovupF7cUaYqPw9QpzG11LHfDjIG4GB8vcUccE1GNCgu0xVP0XC2Rafx6rFW",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
