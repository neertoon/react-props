import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
    let thisDialog = useRef();

    const userLost = remainingTime <= 0;
    const formatedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100 );

    useImperativeHandle(ref, () => {
        return {
            open() {
                thisDialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={thisDialog} className="result-modal">
            {userLost && <h2>You lost</h2>}
            {!userLost && <h2>Your score {score}</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formatedRemainingTime} seconds left.</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
});
export default ResultModal;