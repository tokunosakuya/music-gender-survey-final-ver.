const RAW_TRACKS = [
  {
    "id": "track_001",
    "file": "audio_trimmed/Suno_blues_feminine 3_cut.wav",
    "original_name": "Suno_blues_feminine 3_cut.wav",
    "genre": "blues",
    "style": "feminine"
  },
  // ... 나머지 데이터들 ...
];

const SUPABASE_PROJECT_ID = 'zididtqghlsxszjkpiuk'; // 실제 ID로 변경
const BUCKET_NAME = 'audio-tracks'; 

export const TRACKS = RAW_TRACKS.map(track => {
  // 파일 경로 내의 공백이나 특수문자를 URL용으로 변환 (예: ' ' -> '%20')
  const encodedPath = track.file.split('/').map(part => encodeURIComponent(part)).join('/');
  
  return {
    ...track,
    file: `https://${SUPABASE_PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/${encodedPath}`
  };
});
