// 1. RAW_TRACKS 앞에 export가 있다면 반드시 지우세요!
const RAW_TRACKS = [
  {
    "id": "track_001",
    "file": "audio_trimmed/Suno_blues_feminine 3_cut.wav",
    "original_name": "Suno_blues_feminine 3_cut.wav",
    "genre": "blues",
    "style": "feminine"
  },
  // ... (나머지 데이터들)
];

// 2. 이 부분도 export 없이 작성하세요.
const SUPABASE_PROJECT_ID = 'zididtqghlsxszjkpiuk'; // 사용자님의 실제 ID
const BUCKET_NAME = 'audio-tracks'; 

const TRACKS = RAW_TRACKS.map(track => {
  // 파일 경로 내의 공백이나 특수문자를 URL용으로 안전하게 변환
  const encodedPath = track.file.split('/').map(part => encodeURIComponent(part)).join('/');
  
  return {
    ...track,
    file: `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${encodedPath}`
  };
});
