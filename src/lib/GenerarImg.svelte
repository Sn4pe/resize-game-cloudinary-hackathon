<script lang="ts">
  import {
    randomInt,
    calculatePercentage,
    generateImageUrl,
  } from '../utils/utils';
  import { GameState } from '../utils/enums';
  import loading from '/circles.svg';
  import Lang from '../components/Lang.svelte';
  import Button from '../components/Button.svelte';
  import InputIcon from '../components/InputIcon.svelte';
  import Icons from './Icons.svelte';

  interface Image {
    dimensions: { width: string; height: string };
    guessedDimensions: { width: string; height: string };
    isCorrect: boolean;
  }

  let image: Image = {
    dimensions: { width: '', height: '' },
    guessedDimensions: { width: '', height: '' },
    isCorrect: false,
  };

  let gameState: GameState = GameState.Start;
  let imageUrl: string = '';
  let percentage: string = '';
  let showHintsActive = false;

  const useHint = (): void => {
    showHintsActive = true;
  };

  const setImageDimensions = ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }): void => {
    image.dimensions.width = `${width}`;
    image.dimensions.height = `${height}`;
  };

  const handleClick = async (): Promise<void> => {
    const width = randomInt(50, 300);
    const height = randomInt(50, 300);

    gameState = GameState.InProgress;

    const img = document.createElement('img');
    img.src = generateImageUrl(width, height);

    img.onload = () => {
      handleImageLoad(img);
      gameState = GameState.ShowImage;
    };

    image.guessedDimensions = { width: '', height: '' };
    image.isCorrect = false;
    setTimeout(() => {
      gameState = GameState.Guessed;
    }, 2000);
  };

  const handleImageLoad = (img: HTMLImageElement): void => {
    setImageDimensions({ width: img.width, height: img.height });
    imageUrl = img.src;
  };

  const handleGuess = (): void => {
    const { dimensions, guessedDimensions } = image;

    percentage = calculatePercentage(
      Number(dimensions.width),
      Number(dimensions.height),
      Number(guessedDimensions.width),
      Number(guessedDimensions.height)
    );

    gameState = GameState.Result;
  };

  const restartGame = (): void => {
    gameState = GameState.Start;
    image.dimensions.width = '';
    image.dimensions.height = '';
    showHintsActive = false;
  };

  const handleContextMenu = (event: MouseEvent) => event.preventDefault();
</script>

<div
  class="flex flex-col justify-center items-center  h-[320px] w-[320px] my-5 border-l-4 border-b-4 border-gray-300 border-dashed border-opacity-75"
>
  {#if gameState === GameState.Start}
    <div class="w-64 h-64 flex justify-center items-center">
      <div class="flex flex-col items-center">
        <Icons iconName="arrowDown" />
        <Button page="Start" word="Start Game" onClick={handleClick} />
        <Icons iconName="arrowUp" />
      </div>
    </div>
  {:else if gameState === GameState.ShowImage}
    <img
      src={imageUrl}
      alt=""
      class="h-auto max-w-full"
      on:contextmenu={handleContextMenu}
    />
  {:else if gameState === GameState.InProgress}
    <div class="text-center p-2">
      <Lang page="InProgress" word="Generating" />
    </div>
    <img src={loading} alt="" class="h-auto max-w-full p-2" />
  {:else if gameState === GameState.Guessed}
    <div class="p-5 text-center">
      <h3
        class="bg-gradient-to-r from-green-300 via-green-500 to-green-600 bg-clip-text text-sm font-extrabold text-transparent sm:text-lg"
      >
        <Lang page="Guessed" word="Title" />
      </h3>
      <Lang page="Guessed" word="Width" />
      <InputIcon
        icon="width"
        placeholder="200"
        bind:dimensions={image.guessedDimensions.width}
      />

      <Lang page="Guessed" word="Height" />
      <InputIcon
        icon="height"
        placeholder="120"
        bind:dimensions={image.guessedDimensions.height}
      />

      <Button page="Guessed" word="Submit" onClick={handleGuess} />

      <div class="mt-4 p-4">
        {#if showHintsActive}
          {#if Math.random() >= 0.5}
            <p>The image width is: {image.dimensions.width}px</p>
          {:else}
            <p>The image height is: {image.dimensions.height}px</p>
          {/if}
        {:else}
          <button on:click={useHint}>Show Hints</button>
        {/if}
      </div>
    </div>
  {:else if gameState === GameState.Result}
    <div class="text-center flex flex-col w-2/3">
      <p>
        <Lang page="Result" word="dimensions" />
        <strong
          class="bg-gradient-to-r from-green-300 via-green-500 to-green-600 bg-clip-text font-extrabold text-transparent"
          >{image.dimensions.width}</strong
        >
        x{' '}
        <strong
          class="bg-gradient-to-r from-green-300 via-green-500 to-green-600 bg-clip-text font-extrabold text-transparent"
          >{image.dimensions.height}</strong
        >
      </p>
      <p>
        <Lang page="Result" word="percentage" />
        <strong
          class="bg-gradient-to-r from-green-300 via-green-500 to-green-600 bg-clip-text font-extrabold text-transparent"
        >
          {#if showHintsActive}
            {percentage} (with hints)
          {:else}
            {percentage}
          {/if}
        </strong>
      </p>
      <Button page="Result" word="Play again" onClick={restartGame} />
    </div>
  {/if}
</div>
