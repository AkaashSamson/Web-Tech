import pytube
import os

import moviepy.editor as mp

def download_youtube_video(url):
    # Download the YouTube video
    youtube = pytube.YouTube(url)
    video = youtube.streams.get_highest_resolution()
    video.download()

    # Convert the video to MP3
    video_path = video.default_filename
    mp4_file = mp.VideoFileClip(video_path)
    mp3_file = mp4_file.audio
    mp3_file.write_audiofile(f"{video.title}.mp3")

    # Remove the original video file
    mp4_file.close()
    mp4_file.reader.close()
    mp4_file.audio.reader.close_proc()
    mp4_file.audio.reader = None
    mp4_file.audio = None
    os.remove(video_path)

# Example usage
url = input("Enter the YouTube video URL: ")
download_youtube_video(url)