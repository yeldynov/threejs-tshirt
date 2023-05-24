import React from 'react';

import CustomButton from './CustomButton';

function FilePicker({ file, setFile, readFile }) {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
          type='file'
          id='file-upload'
          accept='image/*'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Завантажити Файл
        </label>

        <p className='mt-2 text-gray-500 text-xs truncate'>
          {file === '' ? 'Файл не обрано.' : file.name}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton
          type='outline'
          title='Лого'
          handleClick={() => readFile('logo')}
          customStyles='text-xs'
        />
        <CustomButton
          type='filled'
          title='Текстура'
          handleClick={() => readFile('full')}
          customStyles='text-xs'
        />
      </div>
    </div>
  );
}

export default FilePicker;
