import React from 'react'
import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'

describe('ProfileStatus component', () => {

    test('status from props should be in state', () => {
        const component = create(<ProfileStatus status='septon' />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe('septon')
    })

    test('after creation span with status should be displayed', () => {
        const component = create(<ProfileStatus />)
        const root = component.root
        const span = root.findByType('span')
        expect(span).not.toBeNull()
    })

    test('after creation input with status should not be displayed', () => {
        const component = create(<ProfileStatus />)
        const root = component.root
        
        expect(() => {
            const input = root.findByType('input')
        }).toThrow()
    })

    test('input with status should be displayed instead of span', () => {
        const component = create(<ProfileStatus status='septon' />)
        const root = component.root
        const span = root.findByType('span')
        span.props.onDoubleClick()
        const input = root.findByType('input')
        expect(input.props.value).toBe('septon')
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status='septon' updateStatusProfile={ mockCallback } />)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })

})
