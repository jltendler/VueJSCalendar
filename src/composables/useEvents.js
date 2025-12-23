import { ref, computed } from 'vue'
import { isSameDay, parseISO } from 'date-fns'

const DUMMY_EVENTS = [
    {
        id: 1,
        title: 'Code Review',
        date: new Date(),
        type: 'work'
    },
    {
        id: 2,
        title: 'Team Lunch',
        date: new Date(new Date().setDate(new Date().getDate() + 2)), // 2 days from now
        type: 'social'
    },
    {
        id: 3,
        title: 'Project Deadline',
        date: new Date(new Date().setDate(new Date().getDate() + 5)),
        type: 'important'
    },
    {
        id: 4,
        title: 'Gym',
        date: new Date(new Date().setDate(new Date().getDate() - 1)),
        type: 'personal' // should be yesterday
    }
]

export function useEvents() {
    const events = ref(DUMMY_EVENTS)

    const getEventsForDate = (date) => {
        return events.value.filter(event => isSameDay(event.date, date))
    }

    const addEvent = (event) => {
        events.value.push({
            ...event,
            id: Date.now()
        })
    }

    return {
        events,
        getEventsForDate,
        addEvent
    }
}
