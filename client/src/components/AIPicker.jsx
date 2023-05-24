import React from 'react';

import CustomButton from './CustomButton';

function AIPicker({ prompt, setPrompt, generatingImg, handleSubmit }) {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Запитайте Штучний Інтелект...'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type='outline'
            title='Обробка...'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton
              type='outline'
              title='Лого'
              handleClick={() => handleSubmit('logo')}
              customStyles='text-xs'
            />
            <CustomButton
              type='filled'
              title='Текстура'
              handleClick={() => handleSubmit('full')}
              customStyles='text-xs'
            />
          </>
        )}
      </div>
    </div>
  );
}

export default AIPicker;
