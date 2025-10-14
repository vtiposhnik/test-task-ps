// libs
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

export const useToggleHook = (
  defaultValue = false
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState(defaultValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle, setValue];
};
