import { X } from 'lucide-react';
import { useState } from 'react';
import Checkbox from './Checkbox';

interface ApprovalCommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (comment: string, sendEmail: boolean) => void;
  type: 'approve' | 'reject';
  itemCount: number;
  items: Array<{ id: string; title: string }>;
}

export default function ApprovalCommentModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  type,
  itemCount,
  items
}: ApprovalCommentModalProps) {
  const [comment, setComment] = useState('');
  const [sendEmail, setSendEmail] = useState(true);
  const [showAll, setShowAll] = useState(false);

  if (!isOpen) return null;

  const isReject = type === 'reject';
  const minLength = isReject ? 20 : 0;
  const isValid = !isReject || comment.trim().length >= minLength;

  const handleConfirm = () => {
    if (isValid) {
      onConfirm(comment.trim(), sendEmail);
      setComment('');
      setSendEmail(true);
    }
  };

  const displayItems = showAll ? items : items.slice(0, 3);
  const hasMore = items.length > 3;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-[var(--radius-card)] max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className={`${isReject ? 'bg-destructive' : 'bg-primary'} text-white px-6 py-4 flex items-center justify-between`}>
          <h3 className="m-0 flex items-center gap-2">
            {isReject ? <XCircle size={20} /> : <CheckCircle size={20} />}
            {isReject ? 'Reject' : 'Approve'} {itemCount} Request{itemCount !== 1 ? 's' : ''}
          </h3>
          <button onClick={onClose} className="text-white hover:opacity-80 transition-opacity">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Items List */}
          <div className="mb-6">
            <p className="text-foreground text-sm mb-3 font-bold">
              {isReject ? 'Rejecting:' : 'Approving:'}
            </p>
            <div className="bg-muted p-4 rounded-[var(--radius)] max-h-[200px] overflow-y-auto">
              <ul className="space-y-2">
                {displayItems.map((item, index) => (
                  <li key={item.id} className="text-foreground text-sm flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
              {hasMore && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="text-primary hover:underline text-sm mt-2"
                >
                  and {items.length - 3} more...
                </button>
              )}
              {hasMore && showAll && (
                <button
                  onClick={() => setShowAll(false)}
                  className="text-primary hover:underline text-sm mt-2"
                >
                  Show less
                </button>
              )}
            </div>
          </div>

          {/* Comment Field */}
          <div className="mb-6">
            <label className="flex gap-1 items-center text-foreground mb-2">
              {isReject && <span className="text-destructive">*</span>}
              {isReject ? 'Reason for rejection' : 'Add comment'} 
              {!isReject && <span className="text-muted-foreground text-sm ml-1">(optional)</span>}
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={isReject 
                ? "Please explain why this request is being rejected so the requestor can address the issues."
                : "Provide any additional notes or conditions for this approval."
              }
              className="w-full bg-input-background border border-border px-3 py-2 text-foreground rounded-[var(--radius)] min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-ring"
              rows={4}
            />
            <div className="flex justify-between items-center mt-1">
              <span className="text-muted-foreground text-sm">
                {isReject && comment.trim().length < minLength && (
                  <span className="text-destructive">
                    Minimum {minLength} characters required
                  </span>
                )}
              </span>
              <span className="text-muted-foreground text-sm">
                {comment.length}/500 characters
              </span>
            </div>
          </div>

          {/* Email Notification Checkbox */}
          <div className="mb-6">
            <Checkbox
              label="Send email notification to requestor"
              checked={sendEmail}
              onChange={setSendEmail}
            />
          </div>

          {/* Warning */}
          {isReject && (
            <div className="mb-6 p-3 bg-destructive/10 border border-destructive rounded-[var(--radius)]">
              <p className="text-destructive text-sm">
                ⚠️ Requestors will be notified via email and will need to resubmit their requests.
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="bg-card text-foreground px-6 py-2 rounded-[var(--radius-button)] border border-border hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!isValid}
              className={`px-6 py-2 rounded-[var(--radius-button)] transition-opacity flex items-center gap-2 ${
                isReject 
                  ? 'bg-destructive text-destructive-foreground' 
                  : 'bg-primary text-primary-foreground'
              } ${!isValid ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
            >
              {isReject ? <XCircle size={16} /> : <CheckCircle size={16} />}
              {isReject ? 'Reject All' : 'Approve All'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}