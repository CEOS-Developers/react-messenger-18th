import { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface StatusMessageProps {
  isProfileChanging: boolean;
  statusMessage: string | null;
  newStatusMessage: string | null;
  setNewStatusMessage: React.Dispatch<React.SetStateAction<string | null>>;
}

const StatusMessage = ({
  isProfileChanging,
  statusMessage,
  newStatusMessage,
  setNewStatusMessage,
}: StatusMessageProps) => {
  const statusMessageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (statusMessageRef.current) {
      statusMessageRef.current.style.height =
        statusMessageRef.current.scrollHeight + 'px';
    }
  }, [isProfileChanging]);

  return (
    <StatusMessageOuter className="status-message-outer">
      {isProfileChanging ? (
        <textarea
          ref={statusMessageRef}
          value={newStatusMessage || ''}
          rows={1}
          onChange={(e) => {
            if (e.target.value.length < 200) {
              setNewStatusMessage(e.target.value);
              e.target.style.height = '40px';
              e.target.style.height = e.target.scrollHeight + 'px';
            }
          }}
          className="status-message-textarea"
        ></textarea>
      ) : (
        <div className="status-message">{statusMessage}</div>
      )}
    </StatusMessageOuter>
  );
};

const StatusMessageOuter = styled.div`
  position: relative;
  padding: 0 12px 12px 12px;
  margin-top: 4px;
  width: 100%;
  border-bottom: 1px solid var(--Gray-2);
  .status-message {
    text-align: center;
    white-space: pre-wrap;
    color: var(--Gray-2);
    font-size: 14px;
    line-height: 160%;
  }
  .status-message-textarea {
    margin-top: 10px;
    text-align: center;
    width: 100%;
    color: var(--Gray-2);
    padding: 12px;
    border: none;
    resize: none;
    border-radius: 4px;
    font-size: 14px;
    background: var(--Gray-1);
    // line-height: 160%;
  }
`;

export default memo(StatusMessage);
