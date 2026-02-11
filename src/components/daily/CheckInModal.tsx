import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

interface CheckInModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (value: number) => void;
}

const feelings = [
  { value: 5, emoji: '😄', key: 'great' },
  { value: 4, emoji: '🙂', key: 'good' },
  { value: 3, emoji: '😐', key: 'okay' },
  { value: 2, emoji: '😕', key: 'notGreat' },
  { value: 1, emoji: '😞', key: 'bad' },
];

export default function CheckInModal({ open, onClose, onSubmit }: CheckInModalProps) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<number | null>(null);

  const handleSubmit = () => {
    if (selected !== null) {
      onSubmit(selected);
      setSelected(null);
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={t('checkin.title')}>
      <p className="text-text-muted mb-4">{t('checkin.question')}</p>
      <div className="flex justify-between gap-2 mb-6">
        {feelings.map((f) => (
          <button
            key={f.value}
            onClick={() => setSelected(f.value)}
            className={cn(
              'flex flex-col items-center gap-1 p-3 rounded-xl border-2 transition-all flex-1',
              selected === f.value
                ? 'border-primary bg-primary/5 scale-105'
                : 'border-border hover:border-primary/30',
            )}
          >
            <span className="text-2xl">{f.emoji}</span>
            <span className="text-xs text-text-muted">{t(`checkin.${f.key}`)}</span>
          </button>
        ))}
      </div>
      <Button
        fullWidth
        onClick={handleSubmit}
        disabled={selected === null}
      >
        {t('checkin.submit')}
      </Button>
    </Modal>
  );
}
