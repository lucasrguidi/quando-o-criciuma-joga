interface TimeFormatOptions {
  format: 'short' | 'long'
}

const formatDate = (date: string, options: TimeFormatOptions) => {
  const originalDate = new Date(date)

  const day = originalDate.toLocaleDateString(undefined, { day: 'numeric' })
  const month = originalDate.toLocaleDateString(undefined, {
    month: '2-digit',
  })
  const weekday = originalDate
    .toLocaleDateString(undefined, {
      weekday: 'short',
    })
    .toUpperCase()
    .slice(0, -1)

  const longFormattedDate = `${weekday} ${day}/${month}`
  const shortFormattedDate = `${day}/${month}`

  if (options.format === 'long') return longFormattedDate
  if (options.format === 'short') return shortFormattedDate
}

const formatHour = (hour: number) => {
  const date = new Date(hour * 1000)
  const hours = date.getHours()
  const minutes = date.getMinutes() || ''

  const formattedTime = `${hours}h${minutes}`
  return formattedTime
}

export const timeFormatters = {
  formatDate,
  formatHour,
}
