import React from 'react';
import { referrerData } from '../../data/data';

const Table = () => {
    return (
        <div className="overflow-x-auto overflow-y-auto h-80 w-full border-4  rounded-lg shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50 rounded-t-lg">
                    <tr className="divide-x divide-gray-200">
                        <th className="px-6 py-3 text-left text-sm font-bold text-blue-600 tracking-wider">Programs</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-blue-600 tracking-wider">Referrer Bonus</th>
                        <th className="px-6 py-3 text-left text-sm font-bold text-blue-600 tracking-wider">Referee Bonus</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {referrerData.map((data) => (
                        <tr key={data.id} className="divide-x divide-gray-200 hover:bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap">{data.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{data.referrerBonus}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{data.refereeBonus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
