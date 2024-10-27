import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    let thisDialog = useRef();

    const userLost = remainingTime <= 0;
    const formatedRemainingTime = (remainingTime / 1000).toFixed(2);

    useImperativeHandle(ref, () => {
        return {
            open() {
                thisDialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={thisDialog} className="result-modal">
            <h2>You {userLost ? 'lost' : 'won'}</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formatedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});
export default ResultModal;