import { useState } from 'react';
import './style.css';
import close from '../../images/icons/close.svg';

function GuideCard({ title, img, text }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const isBuff = (text) => text && text.startsWith('+');
    const isDebuff = (text) => text && text.startsWith('-');

    return (
        <div className="guide__card">
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={close} onClick={closeModal} alt='Закрыть модальное окно' className='modal-close'/>
                        <div className='modal-content-center'>
                            <h5 className="modal__header">{title}</h5>
                            <img src={img} className="modal__img" alt={title} />
                        </div>
                    </div>
                </div>
            )}
            <h5 className="guide__card__header">{title}</h5>
            <div className="guide__card__img__cont">
                <img src={img} className="guide__card__img" alt={title} onClick={openModal} />
            </div>
            <div className="guide__card__desc">
                {Array.isArray(text) ? (
                    text.map((item, index) =>
                        <p key={index} className={`guide__card__text ${isBuff(item) ? 'buff' : isDebuff(item) ? 'debuff' : ''}`}>{item}</p>)
                ) : (
                    <p className={`guide__card__text ${isBuff(text) ? 'buff' : isDebuff(text) ? 'debuff' : ''}`}>{text}</p>
                )}
            </div>
        </div>
    );
}

export default GuideCard;