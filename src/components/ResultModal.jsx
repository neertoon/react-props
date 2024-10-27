import { forwardRef, useImperativeHandle, useRef } from 'react';

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    let thisDialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                thisDialog.current.showModal();
            }
        };
    });

    return (
        <dialog ref={thisDialog} className="result-modal">
            <h2>Your {result} lost/won</h2>
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left.</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
});
export default ResultModal;