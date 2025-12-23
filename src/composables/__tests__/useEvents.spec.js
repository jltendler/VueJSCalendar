import { describe, it, expect, beforeEach } from 'vitest'
import { useEvents, DUMMY_EVENTS } from '../useEvents'

describe('useEvents', () => {

    const { events, addEvent, getEventsForDate, sortedEvents, removeEvent } = useEvents()

    it('should match the initial dummy data length', () => {
        expect(events.value.length).toEqual(DUMMY_EVENTS.length);
    })

    it('should add a new event', () => {
        const initialLength = events.value.length

        const newEvent = {
            title: 'Test Event',
            date: new Date('2025-01-01'),
            type: 'work'
        }

        addEvent(newEvent);

        expect(events.value.length).toBe(initialLength + 1);

        // Verify the last added event matches our data
        const added = events.value[events.value.length - 1]
        expect(added.title).toBe('Test Event');
        expect(added.type).toBe('work');
    })

    it('should sort events by date', () => {
        const earlyEvent = {
            title: 'Early Event',
            date: new Date('2020-01-01'),
            type: 'personal'
        }

        const lateEvent = {
            title: 'Late Event',
            date: new Date('2999-12-31'),
            type: 'personal'
        }
        addEvent(earlyEvent);

        const firstEvent = sortedEvents.value[0];
        expect(firstEvent.title).toBe('Early Event');

        addEvent(lateEvent);
        const lastEvent = sortedEvents.value[sortedEvents.value.length - 1];
        expect(lastEvent.title).toBe('Late Event');
    })
    it('should remove an event by id', () => {
        const initialLength = events.value.length;
        const eventToRemove = events.value[0];

        removeEvent(eventToRemove.id);

        expect(events.value.length).toBe(initialLength - 1);
        expect(events.value.find(e => e.id === eventToRemove.id)).toBeUndefined();
    })
    it('should remove multiple events', () => {
        const initialLength = events.value.length;
        const eventToDelete1 = events.value[2];
        const eventToDelete2 = events.value[1];
        const eventToDelete3 = events.value[3];

        removeEvent([eventToDelete1.id, eventToDelete2.id, eventToDelete3.id]);

        expect(events.value.length).toBe(initialLength - 3);
        expect(events.value.find(e => e.id === eventToDelete1.id)).toBeUndefined();
        expect(events.value.find(e => e.id === eventToDelete2.id)).toBeUndefined();
        expect(events.value.find(e => e.id === eventToDelete3.id)).toBeUndefined();
    });
})
