import React, { useContext } from 'react';
import { MdOutlineStyle } from 'react-icons/md';
import { ThemeContext } from '../../Context/theme';

function ThemeSelect() {
  const { Theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="form-control">
      <label className="input-group input-group-xs mr-4 ">
        <select
          onChange={(e) => setTheme(e.target.value)}
          className="focus:outline-0 capitalize select select-xs text-base-content w-100 "
          defaultValue={Theme}
        >
          <option value="night">Dark</option>
          <option value="cupcake">Light</option>
          <option value="halloween">Yellow</option>
          <option value="valentine">Pink</option>
          <option value="lemonade">Green</option>
          <option value="winter">Blue</option>
        </select>
        <span>
          <MdOutlineStyle size={20} className="text-base-content " />
        </span>
      </label>
    </div>
  );
}

export default ThemeSelect;
