function NowPlaying([name, author, duration]){
    let result = `Now Playing: ${author} - ${name} [${duration}]`;
    console.log(result);
}

NowPlaying(['Number One', 'Nelly', '4:09']);