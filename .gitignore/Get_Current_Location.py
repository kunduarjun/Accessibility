import geocoder


def get_user_location():
    try:
        # Using the 'ipinfo.io' provider, which provides location information based on the IP address
        location = geocoder.ip('me')

        if location:
            print("Location information based on current IP address:")
            print(f"City: {location.city}")
            # print(f"Region: {location.region}")
            print(f"Country: {location.country}")
            print(f"Latitude: {location.latlng[0]}, Longitude: {location.latlng[1]}")
            return location.city, location.country, location.latlng[0], location.latlng[1]
        else:
            print("Unable to determine location based on IP address.")
            return None

    except Exception as e:
        print(f"An error occurred: {e}")
        return None


# Call the function to get the user's location
city, country, latitude, longitude = get_user_location()
print(f'City: {city}, Country: {country}, Latitude: {latitude}, Longitude: {longitude}')
