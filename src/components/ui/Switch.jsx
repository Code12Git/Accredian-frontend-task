import { Switch } from '@headlessui/react'
import { useState } from 'react'

export default function SwitchButton() {
    const [enabled, setEnabled] = useState(false)

    return (
        <div className=' md:ml-auto'>
            <div className='flex items-center text-secondary-400 gap-4'>
                <h1>Enrolled</h1>
                <div>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`relative inline-flex items-center h-6 w-12 cursor-pointer rounded-full border-2 border-black bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none`}
                    >
                        <span
                            aria-hidden="true"
                            className={`inline-block h-5 w-5 transform rounded-full bg-blue-500 transition duration-200 ease-in-out ${enabled ? 'translate-x-6' : 'translate-x-0'}`}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
