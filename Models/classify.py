from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from keras.models import load_model
from PIL import Image
import numpy as np
import os
app = Flask(__name__)
CORS(app)

model = load_model(r'D:\CU 7th Semester\FYP-I\Updated Project Docs\Updated-26-may\Intelligent-Symptomate\Models\model.h5', compile=True)
models = load_model(r'D:\CU 7th Semester\FYP-I\Updated Project Docs\Updated-28-may\Intelligent-Symptomate\Models\symptoms.h5', compile=True)



def reshape_data(x):
        """
        Reshapes arrays into format for MXNet
        INPUT
            img_rows: Array (image) height
            img_cols: Array (image) width
            channels: Specify if image is grayscale(1) or RGB (3)
            nb_classes: number of image classes/ categories
        OUTPUT
            Reshaped array of NumPy arrays
        """
        # image = Image.open(a[i])
        # print(a[i])
        # image = image.convert('RGB')
        # plt.imshow(image)
        # plt.show()
        x=x/255
        x = x.astype("float32")
        x=x.reshape(100,75,3)
        x= x.reshape(1,100,75,3)
        x = x.astype("float32")
        return x


@app.route('/classify', methods=['POST'])
def index():
    if request.method == 'POST':
        # print("--------+++++---------")
        # #print(request.form.get('symptoms'))
        # xr=request.form.get('symptoms')
        # xr=np.array(xr)
        # xr=[[request.form.getlist('symptoms')]]
        # print(xr)
        # print("--------+++++---------")
        print(request.files['file'])
        image = request.files['file']
        image.save(image.filename)
        # img_path = r'C:\Users\abdul\Desktop\isee-web\dr_model\eye.jpg'
        # img = Image.open(img_path).resize((256, 256))
        img = Image.open(image.filename).resize((75, 100))
        img = img.convert('RGB')
        x = np.array(img)
        print(x.shape)
        x = reshape_data(x)
        prediction = model.predict(x)
        label = prediction.argmax(axis=-1).tolist()
        print("Model Prediction in numpy form")
        print(type(label))
        print(prediction)
        os.remove(image.filename)
        return jsonify({
            'success': True,
            'label': label
        })

@app.route('/classifysymptoms', methods=['POST'])
def symptoms():
    if request.method == 'POST':
        print("--------+++++---------")
        # #print(request.form.get('symptoms'))
        # xr=request.form.get('symptoms')
        # xr=np.array(xr)
        # xr=[[request.form.getlist('symptoms')]]
        # print(xr)
        data =request.get_json()
        dat=data["symptoms"]
        da = np.array([dat])
        print(da)
        print("--------+++++---------")
        # print(request.files['file'])
        # image = request.files['file']
        # image.save(image.filename)
        # # img_path = r'C:\Users\abdul\Desktop\isee-web\dr_model\eye.jpg'
        # # img = Image.open(img_path).resize((256, 256))
        # img = Image.open(image.filename).resize((75, 100))
        # img = img.convert('RGB')
        # x = np.array(img)
        # print(x.shape)
        # x = reshape_data(x)
        prediction = models.predict(da)
        label = prediction.argmax(axis=-1).tolist()
        print("Model Prediction in numpy form")
        print("-----label-----")
        print(label)
        print("-----label-----")
        print(prediction)
        # os.remove(image.filename)
        return jsonify({
            'success': True,
            'label': label
        })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
