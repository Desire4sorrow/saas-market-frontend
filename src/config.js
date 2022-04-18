import axios from "axios";

export const HTTP = axios.create({
    baseURL: (location.host === 'testvm.plotpad.ru') ? 'http://testvm.plotpad.ru:4964/api' : 'http://localhost:4964/api',
    headers: {
        authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJoMDBoOWE3ZEtNVVJrdUJJVXZlb1d5OVIwNlprSjZuYzNjbzVoMzIyWkZVIn0.eyJleHAiOjE2NDk4NzEyNDEsImlhdCI6MTY0OTg3MDk0MSwiYXV0aF90aW1lIjoxNjQ5ODcwOTIyLCJqdGkiOiI2MWQ4YmJkMy0zYmM5LTQ3MjAtYTZhZS05MGFjZDk4ODllM2MiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL3NhYXMtc2hvcCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiMDQ0Y2QyZS1jYjdmLTRhOGQtOTA3ZC0yNTgwYTQyMjA3YTEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzYWFzLXNob3AtY2xpZW50Iiwibm9uY2UiOiI4ZjRiNWFlMy1lZDhhLTQ5MTMtOTAzMC1kN2YzMDdkMGViMjEiLCJzZXNzaW9uX3N0YXRlIjoiYWU4NGQ4MTUtZmQzYS00MTc5LThlN2YtNjY3ZDE0NThmNzRhIiwiYWNyIjoiMCIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vbG9jYWxob3N0OjQwMDAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLXNhYXMtc2hvcCJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJzaWQiOiJhZTg0ZDgxNS1mZDNhLTQxNzktOGU3Zi02NjdkMTQ1OGY3NGEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiLQkNC70LXQutGB0LDQvdC00YAg0KDRi9Cx0LDQutC-0LIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYXNrYV9yeWJAbWFpbC5ydSIsImdpdmVuX25hbWUiOiLQkNC70LXQutGB0LDQvdC00YAiLCJmYW1pbHlfbmFtZSI6ItCg0YvQsdCw0LrQvtCyIiwiZW1haWwiOiJzYXNrYV9yeWJAbWFpbC5ydSJ9.P-ENUf-d1oR9bM-vnRCxaa2lMlNVEvvEZStu8Tr9o_kG-IOO8_XiGaYf9kOs4VwyVA2XRYKmBsV-fAYhG4tNwn87KbKXir2Rfs6tTavogCCAuKwYBpJc0fWlEbCIXxI5u9I-SULgbhMuoXoHjfj6cVtqsqWLq5eWha5HIcnHMUG3SXqWAffepD6UJoTTIdRaVXa9j8oqASv2AtWwoA68nB2FXtDb6R9PyC7EsOT5VYlVV8LrEbScXVTjHpBBhNnY0gkZ3339VtZ91Uun2nus3E7gI-2kmGm99tUTsTKLLRHkldijMo91c912fNc8Em4j8g6FFZd5VOPgv0rrEWr6mQ ',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})