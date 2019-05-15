# import os, json
# def start_conversion():
#     with open(os.path.join('/','home', 'ravinder', 'Trial_Projects', 'autocomplete_proj', 'static', 'dictionary.json'), 'r') as fp: #change the file path as per your directory
#         df =fp.read()
#         skipped = 0
#         new_file = open('dict.json', 'a')
#         df = json.loads(df)
#         # print(df)
#         dict_array = []
#         for key, value in df.items():
#             # print('key: ', key )
#             # print('value: ', value )
#             dict_dict = {
#                 'word': key,
#                 'meaning' : value,
#             }
#             dict_array.append(dict_dict)
#         dict_array = json.dumps(dict_array)
#         # print(dict_array)
#         new_file.write(dict_array)
#         # print(new_file.read())