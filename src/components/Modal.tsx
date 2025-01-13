import GBFlag from '@/assets/flags/gb.svg';
import ESFlag from '@/assets/flags/es.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-white dark:bg-dark-background p-8 rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
        <h3 className="text-2xl font-bold mb-6 dark:text-white text-center">
          Select CV Language
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <a
            href="/assets/docs/Diego Costa CV ENG.pdf"
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-2 border-accent text-accent py-4 px-6 rounded-lg font-medium hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-200 text-center"
            onClick={onClose}
          >
            <img src={GBFlag} alt="UK flag" className="w-6 h-6 mr-2" />
            English
          </a>
          <a
            href="/assets/docs/Diego Costa CV ESP.pdf"
            className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-2 border-accent text-accent py-4 px-6 rounded-lg font-medium hover:bg-secondary hover:border-secondary hover:text-white transition-colors duration-200 text-center"
            onClick={onClose}
          >
            <img src={ESFlag} alt="Spain flag" className="w-6 h-6 mr-2" />
            Spanish
          </a>
        </div>
        <button
          onClick={onClose}
          className="block w-full bg-secondary/90 text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
