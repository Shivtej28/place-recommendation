#!/usr/bin/env python
# coding: utf-8

# In[1]:


from flask import Flask,request,jsonify
from flask_cors import CORS
import recommendation


# In[ ]:


app = Flask(__name__)
CORS(app) 
        
@app.route('/hotels', methods=['GET'])
def recommend_hotels():
        res = recommendation.recommendations(request.args.get('name'))
        return jsonify(res)

if __name__=='__main__':
        app.run(debug = True)


# In[ ]:




