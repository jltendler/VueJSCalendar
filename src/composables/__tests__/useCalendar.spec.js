import { describe, it, expect } from 'vitest'
import { useCalendar } from '../useCalendar'
import { format, addMonths } from 'date-fns'

describe('useCalendar', () => {
    it('should initialize with the current date', () => {
        const { currentDate, currentMonthYear } = useCalendar()

        const now = new Date()
        const expectedFormat = format(now, 'MMMM yyyy')

        expect(currentMonthYear.value).toBe(expectedFormat)
    })

    it('should navigate to the next month', () => {
        const { currentDate, navigateNext } = useCalendar()

        const startMonth = currentDate.value.getMonth()

        navigateNext()

        // Expect month to increment (modulo 12 logic handled by date-fns)
        // We check if it is technically 1 month ahead
        const expectedDate = addMonths(new Date(), 1)

        // Compare month and year
        expect(currentDate.value.getMonth()).toBe(expectedDate.getMonth())
        expect(currentDate.value.getFullYear()).toBe(expectedDate.getFullYear())
    })

    it('should generate a grid of days', () => {
        const { daysInGrid } = useCalendar()

        // Grid should always be 7 columns.
        // Usually 4, 5, or 6 rows. (28, 35, 42)
        // Our implementation map returns a flat array.

        const days = daysInGrid.value
        expect(days.length % 7).toBe(0) // Should be a multiple of 7 (full weeks)

        // Verify object structure
        const firstDay = days[0]
        expect(firstDay).toHaveProperty('date')
        expect(firstDay).toHaveProperty('isCurrentMonth')
        expect(firstDay).toHaveProperty('isToday')
    })
})
