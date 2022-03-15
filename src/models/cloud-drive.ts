import { useCallback, useReducer, useRef } from 'react';

type CloudDriveState = {
  currentCloudDrive?: string;
};

export default function useCloudDriveModel() {
  const state = useRef<CloudDriveState>({});
  const [, forceRender] = useReducer((s) => s + 1, 0);

  const handleSetCloudDrive = useCallback((driveId) => {
    if (state.current.currentCloudDrive == driveId) {
      return;
    }
    state.current.currentCloudDrive = driveId;
    forceRender();
  }, []);

  return {
    state: state.current,
    setCloudDrive: handleSetCloudDrive,
  };
}
