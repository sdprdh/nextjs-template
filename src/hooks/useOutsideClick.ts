'use client';

import { type RefObject, useEffect } from 'react';

type TOutside = {
    ref: [RefObject<HTMLElement | null>, RefObject<HTMLElement | null>];
    callback: () => void;
};

export const useOutsideClick = ({ ref, callback }: TOutside) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                ref[0].current &&
                !ref[0].current.contains(event.target as Node) &&
                ref[1].current &&
                !ref[1].current.contains(event.target as Node)
            ) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
};
