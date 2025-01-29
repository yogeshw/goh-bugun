from PIL import Image
import os

def resize_image(image_path):
    with Image.open(image_path) as img:
        width, height = img.size
        
        # Determine if image is portrait or landscape
        is_portrait = height > width
        
        if is_portrait:
            # Calculate new width while maintaining aspect ratio
            new_height = 1000
            new_width = int(width * (new_height / height))
            new_size = (new_width, new_height)
        else:
            # Calculate new height while maintaining aspect ratio
            new_width = 1000
            new_height = int(height * (new_width / width))
            new_size = (new_width, new_height)
            
        # Resize the image
        resized_img = img.resize(new_size, Image.Resampling.LANCZOS)
        
        # Save back to the same location
        resized_img.save(image_path, quality=95, optimize=True)
        print(f"Resized {os.path.basename(image_path)} to {new_size}")

def main():
    # Path to images directory
    images_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'images')
    
    # Supported image extensions
    valid_extensions = {'.jpg', '.jpeg', '.png', '.gif'}
    
    # Process each image in the directory
    for filename in os.listdir(images_dir):
        if os.path.splitext(filename)[1].lower() in valid_extensions:
            image_path = os.path.join(images_dir, filename)
            try:
                resize_image(image_path)
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    main()
