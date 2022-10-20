import urllib.parse
import requests

try:
    google_url = 'http://maps.googleapis.com/maps/api/geocode/json?'
    user_input = input('\nEnter address/location to search: ')
    
    url = google_url + urllib.parse.urlencode({'address': user_input})
    google_json_data = requests.get(url).json()  # creates json data from the requests
    
    full_address = google_json_data['results'][0]['formatted_address']  # i.e. (Morgan Hill, CA, USA)
    geo_lng = google_json_data['results'][0]['geometry']['location']['lng']  # returns longitude
    geo_lat = google_json_data['results'][0]['geometry']['location']['lat']  # returns latitude
    return_status = google_json_data['status']  # returns the status message
    
    def address_info():
        long_name_addr = []
        short_name_addr = []
        
        for long_name in google_json_data['results'][0]['address_components']:
            long_name_addr.append(long_name['long_name'])
            
        for short_name in google_json_data['results'][0]['address_components']:
            if len(short_name['short_name']) == 2:
                short_name_addr.append(short_name['short_name'])
        
        del short_name_addr[-1]
        
        return long_name_addr, short_name_addr
        
    long_short_addr = address_info()
    
    print('\nInformation pertaining to your search:\n')
    print('\tFull address: ' + full_address)
    print('\tLongitude: ' + str(geo_lng))
    print('\tLatitude: ' + str(geo_lat))
    print('\tRequest Status: ' + return_status)
    print('-' * 50)
        
except KeyError:
    print('\n** An unexpected error occured. Please try again! **\n')