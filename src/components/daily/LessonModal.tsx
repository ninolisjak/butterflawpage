import { useTranslation } from 'react-i18next';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import type { Lesson } from '../../types';

interface LessonModalProps {
  open: boolean;
  onClose: () => void;
  lesson: Lesson | null;
  onComplete: () => void;
}

export default function LessonModal({
  open,
  onClose,
  lesson,
  onComplete,
}: LessonModalProps) {
  const { t } = useTranslation();

  if (!lesson) return null;

  return (
    <Modal open={open} onClose={onClose} title={lesson.title} size="lg">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{lesson.icon}</span>
        <span className="text-sm text-text-muted">
          {t('lesson.readTime', { seconds: lesson.durationSeconds })}
        </span>
      </div>

      <div className="text-text leading-relaxed whitespace-pre-line mb-6 text-[15px]">
        {lesson.content}
      </div>

      <Button fullWidth onClick={onComplete}>
        {t('lesson.markRead')} ✓
      </Button>
    </Modal>
  );
}
