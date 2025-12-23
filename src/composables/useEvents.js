import { ref, computed } from 'vue';
import { isSameDay } from 'date-fns';

export const DUMMY_EVENTS = [
    //a few dynamically generated events to show on the calendar by default, on different days including past
    //exported for future testing usage
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
        type: 'personal'
    },
    {
        id: 5,
        title: 'Meeting',
        date: new Date(new Date().setDate(new Date().getDate() + 1)),
        type: 'work'
    },
    {
        id: 6,
        title: 'Doctor Appointment',
        date: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
        type: 'personal'
    }
]

const events = ref(DUMMY_EVENTS);

export function useEvents() {
    const getEventsForDate = (date) => {
        return events.value.filter(event => isSameDay(event.date, date));
    };

    const addEvent = (event) => {
        let eventDate = event.date;

        // If it's a string from an input type="date" (YYYY-MM-DD), 
        // parse it manually to avoid timezone offsets (UTC vs Local)
        if (typeof eventDate === 'string' && eventDate.includes('-')) {
            const [year, month, day] = eventDate.split('-').map(Number);
            eventDate = new Date(year, month - 1, day);
        }

        events.value.push({
            ...event,
            id: Date.now(),
            date: eventDate
        })
    }

    const removeEvent = (ids) => {
        const idsToRemove = Array.isArray(ids) ? new Set(ids) : new Set([ids]);
        events.value = events.value.filter(event => !idsToRemove.has(event.id));
    }

    const sortedEvents = computed(() => {
        return [...events.value].sort((a, b) => new Date(a.date) - new Date(b.date));
    })

    return {
        events,
        sortedEvents,
        getEventsForDate,
        addEvent,
        removeEvent
    }
}
