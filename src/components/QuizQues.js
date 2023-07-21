import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Options from './Options';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Quiz = () => {
  const quizQues = useLoaderData();
  const { name, questions } = quizQues.data;
  return (
    <div className='m-20'>
      <h2 className='text-4xl text-teal-900 font-semibold'>Quiz of {name}</h2>
      {
        questions.map(ques => <section class="text-gray-600 body-font lg:mx-40 my-6 shadow-2xl">
          <div class="container px-5 py-24 mx-auto">
            <div class="text-center mb-20">
              <h1 class="sm:text-xl text-xl font-medium text-center title-font text-gray-900 mb-4">{ques.question}</h1>
              <div className='w-8 mx-auto ' onClick={() => toast(ques.correctAnswer, { autoClose: 1400 })}>
                <EyeIcon />
              </div>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {ques.options.map(option => <Options key={option.key} option={option} correctAnswer={ques.correctAnswer}></Options>)}</div>
          </div>
        </section>)
      }
    </div>
  );
};

export default Quiz;